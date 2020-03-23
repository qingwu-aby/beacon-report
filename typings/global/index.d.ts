interface IExt extends Performance {
  addData: Function
  addError: Function
}
declare interface Window {
  ERROR_LIST: IError[]
  ADD_DATA: Object
  Performance: IExt
}

interface IError {
  method?: string;
  n?: string;
  message?: string | Object;
  col?: string;
  line?: string;
  resUrl?: string;
  data?: any
}
