interface options {
    max?: number,
    min?: number,
}

export const mergeClassNames = (...args: any[]) => args.filter(a => a).map(a => String(a).trim()).filter(a => a).join(" ")

export const inputUpdate = (setState: Function, data: any, options:options = {}) => {
  return { value: data, onChange: (e: any) => {
  const { value } = e.target
  const { max, min } = options

  if(max && value.length > max)return
  if(min && value.length < min)return
  
  setState(e.target.value)
  }}
}

export const inputObjUpdate = (setState: Function, data: {}, type: string, options:options = {}) => {
  
  return {value: data[type as keyof typeof data], onChange: (e: any) => {
    const { value } = e.target
    const { max, min } = options
  
    if(max && value.length > max)return
    if(min && value.length < min)return
    
    setState((state: {}) => ({...state, [type]: value}))
  }}
}

export const copy = (str: any) => {
    const el = document.createElement("textarea");
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    const selected =
      (document.getSelection()?.rangeCount || 0) > 0
        ? document.getSelection()?.getRangeAt(0)
        : false;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      document.getSelection()?.removeAllRanges();
      document.getSelection()?.addRange(selected);
    }
  };

  export const randomFrom = (arr: string | []) => arr[Math.floor(Math.random() * arr.length)]

  export const generateHash = (length: number = 6) => {
    let symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_"
    let hash = ""
    for(let i=0; i < length; i++){
      hash += randomFrom(symbols)
    }
    return hash
  }

const functions = {
    mergeClassNames,
    inputUpdate,
    inputObjUpdate,
    copy,
    randomFrom,
    generateHash
}

export default functions