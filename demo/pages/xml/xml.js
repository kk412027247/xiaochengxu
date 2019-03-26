Page({
  data:{
    condition:true,
    length:6,
    array:[{message:'foo'},{message:'bar'}],
    objectArray:[
      { id: 5, quique: 'unique_5' },
      { id: 4, quique: 'unique_4' },
      { id: 3, quique: 'unique_3' },
      { id: 2, quique: 'unique_2' },
      { id: 1, quique: 'unique_1' },
      { id: 0, quique: 'unique_0' },
    ],
    numberArray:[1,2,3,4]
  },
  swtich:function(e){
    const length = this.data.objectArray.length
    for(let i = 0; i< length; i++){
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random()*length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e){
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique:'unique_'+length}].concat(this.data.objectArray)
    this.setData({
      objectArray:this.data.objectArray
    })
  },
  addNumberToFront:function(e){
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
})