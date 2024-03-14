import { Component } from '@angular/core';

@Component({
  selector: 'app-promise-demo2',
  templateUrl: './promise-demo2.component.html',
  styleUrls: ['./promise-demo2.component.css']
})
export class PromiseDemo2Component {

  getPromise(b: boolean): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      console.log("in promise:" + Date.now());
      setTimeout(() => {
        console.log("time out:" + Date.now());
        if (b) {
          resolve("ok")
        } else {
          reject(new Error("Error"))
        }
      }, 2000)
    })
  }

  async demo2(b: boolean) {
    let p: string
    try {
      console.log("start:", Date.now());
      p = await this.getPromise(b)
      console.log(p);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      console.log("finally");
    }
  }

}
