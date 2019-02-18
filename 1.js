// buffer.concat
let b1 = Buffer.from('珠');
let b2 = Buffer.from('峰');
let big = Buffer.alloc(6);
// source.copy(target,targetStart,sourceStart,sourceEnd)
Buffer.concat = function(list,totalLength){ // copy
  if(typeof totalLength=='undefined'){
    totalLength=list.reduce((per,next)=>{
        return per+next.length
    },0)
  }
  let buffer=new Buffer.alloc(totalLength)
  let index=0
  list.forEach(item=>{
      item.copy(buffer,index)
      index+=item.length
  })
  return buffer.slice(0,index).toString()
}
let buf = Buffer.concat([b1,b2,b1,b1]);
console.log(buf);


// finally

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
      value  => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason })
    );
  };