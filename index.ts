// const ERROR_LIST: [] = [];

// const ADD_DATA: object = {};

// window.Performance = Performance;

// Performance.addError = function (err: IError) {
//   err = {
//     method: 'GET',
//     n: 'js',
//     message: err.message,
//     data: {
//       col: err.col,
//       line: err.line,
//       resUrl: err.resUrl
//     }
//   }
//   ERROR_LIST.push(err)
// }
// Performance.addData = function (fn: Function) {
//   fn && fn(ADD_DATA)
// }

class PerformanceIext implements Performance {
  navigation!: PerformanceNavigation;
  onresourcetimingbufferfull!: ((this: Performance, ev: Event) => any) | null;
  timeOrigin!: number;
  timing!: PerformanceTiming;
  clearMarks(markName?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
  clearMeasures(measureName?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
  clearResourceTimings(): void {
    throw new Error("Method not implemented.");
  }
  getEntries(): PerformanceEntryList {
    throw new Error("Method not implemented.");
  }
  getEntriesByName(name: string, type?: string | undefined): PerformanceEntryList {
    throw new Error("Method not implemented.");
  }
  getEntriesByType(type: string): PerformanceEntryList {
    throw new Error("Method not implemented.");
  }
  mark(markName: string): void {
    throw new Error("Method not implemented.");
  }
  measure(measureName: string, startMark?: string | undefined, endMark?: string | undefined): void {
    throw new Error("Method not implemented.");
  }
  now(): number {
    throw new Error("Method not implemented.");
  }
  setResourceTimingBufferSize(maxSize: number): void {
    throw new Error("Method not implemented.");
  }
  toJSON() {
    throw new Error("Method not implemented.");
  }
  addEventListener<K extends "resourcetimingbufferfull">(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
  addEventListener(type: any, listener: any, options?: any) {
    throw new Error("Method not implemented.");
  }
  removeEventListener<K extends "resourcetimingbufferfull">(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
  removeEventListener(type: any, listener: any, options?: any) {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
}

const PERFORMANCE_REPORT: number = 1;
const REQUEST_REPORT: number = 2;
const ERROR_REPORT: number = 3;

const LAST_TIMESTAMP = new Date().setHours(23, 59, 59, 999);
const NOT_AJAX_ARR = ['fetch', 'xmlhttprequest'];

/**
 * @desc new Monitor(opts, fn)
 */
export default class Monitor extends PerformanceIext {
  options: any;
  fn: Function;
  initConf: {
    // 资源列表
    resourceList: object[];
    // 页面信息
    performance: {};
    // 错误列表
    errorList: object[];
    // referrer 来源
    lastURI: string;
    // 当前页面
    currentPage: string;
  };
  constructor(options: any, fn: Function) {
    super();
    this.options = options;
    this.fn = fn;
    this.initConf = {
      // 资源列表
      resourceList: [],
      // 页面信息
      performance: {},
      // 错误列表
      errorList: [],
      // referrer 来源
      lastURI: document.referrer && document.referrer !== location.href ? document.referrer : '',
      // 当前页面
      currentPage: ''
    }
  }

  private getOptions() {
    let opts = Object.assign({
      // 上报地址
      domain: 'XXXX',
      // 脚本延迟上报时间
      outTime: 300,
      // ajax请求时需要过滤的url信息
      filterUrl: [],
      // 是否上报页面性能数据
      isPage: true,
      // 是否上报ajax性能数据
      isAjax: true,
      // 是否上报页面资源数据
      isResource: true,
      // 是否上报错误信息
      isError: true,
      // 提交参数
      add: {},
    }, this.options);

    const initError = {
      t: '',
      n: 'js',
      msg: '',
      data: {}
    }
    return {
      opts,
      initError
    }
  }

  private get params() {
    return this.getOptions();
  }

  private error() {

  }

  // 页面性能信息
  public performancePage() {
    if (!window.performance) return;
    const timing = performance.timing;
    this.initConf = {
      ...this.initConf,
      performance: {
        // dns 解析
        dnsTiming: timing.domainLookupEnd - timing.domainLookupStart || 0,
        // tcp 建立
        tcpTiming: timing.connectEnd- timing.connectStart || 0,
        // request
        reqTiming: timing.responseEnd - timing.requestStart || 0,
        // 白屏
        whiteTiming: timing.responseStart - timing.navigationStart || 0,
        // dom 渲染
        domTiming: timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart || 0,
        // dom 解析耗时
        domInteractive: timing.domComplete - timing.domInteractive || 0,
        // onload
        onloadTiming: timing.loadEventEnd- timing.loadEventStart || 0,
        // ready
        readyTiming: timing.fetchStart - timing.navigationStart || 0,
      }
    }
  }
  // 页面资源信息
  public performanceSource() {
    if (!window?.performance?.getEntries) return false;
    const resources = window.performance.getEntriesByType('resource');
    if (!resources || !resources?.length) return [];
    const {
      isAjax,
      isResource
    } = this.params.opts;
    this.initConf = {
      ...this.initConf,
      resourceList: resources.map(item => {
        if (!isAjax && (NOT_AJAX_ARR.includes(item.initiatorType))) return {};
        if (!isResource && (item.initiatorType != 'xmlhttprequest' && item.initiatorType !== 'fetchrequest')) return {};
        const midData = {
          name: item.name,
          type: item.entryType,
          initiatorType: item.initiatorType,
          nextHopPortocol: item.nextHopProtocol,
          duration: item.duration.toFixed(2) || 0,
          decodedBodySize: item.decodedBodySize || 0,
        }
        return midData;
      })
    }
  }

  // 上报
  public reportData(reportType?: number) {
    const {
      isPage,
      outTime
    } = this.params.opts;
    setTimeout(() => {
      if (isPage) this.performancePage()
      console.log(this.initConf);
    }, outTime)
  }
}
