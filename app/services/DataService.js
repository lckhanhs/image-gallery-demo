class DataService {
  constructor() {
    this.data = [];
    for (let index = 0; index < 105; index++) {
      const image = "http://placekitten.com/1920/1080?image=" + index;
      this.data.push(image);
    }
  }

  getData(page = 0, limit = 25) {
    const cData = JSON.parse(JSON.stringify(this.data));
    const startPos = page * limit;
    let result = [];
    if (startPos < cData.length) {
      result = cData.splice(startPos, limit);
    }
    let resultObj = {
      count: this.data.length,
      currentPage: page,
      limit: limit,
      list: result
    };
    if(startPos + limit <= this.data.length){
      resultObj.nextPage = page + 1;
    }
    return resultObj;
  }
}
export default new DataService();
