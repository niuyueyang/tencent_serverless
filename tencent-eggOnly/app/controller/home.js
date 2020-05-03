'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getData() {
      //查询一条数据，提到一个json对象{}
      let result = await this.app.mysql.query("select * from users limit 0,10");
      const { ctx } = this;
      ctx.body = result;
  }
}

module.exports = HomeController;
