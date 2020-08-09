import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { products } from "../commons/datasets/products";
import { InjectFnToFunctionPayload } from "./dto/inject-fn-to-function.payload";
import { DEFAULT_INTERVAL, DEFAULT_TIMEOUT } from "./ssjs-injections.constants";
import { InjectFnToEvalPayload } from "./dto/inject-fn-to-eval.payload";
import { InjectFnToSetIntervalPayload } from "./dto/inject-fn-to-set-interval.payload";
import { InjectFnToSetTimeoutPayload } from "./dto/inject-fn-to-set-timeout.payload";

@Controller('ssjs-injections')
export class SsjsInjectionsController {

  @Post('inject-fn-to-set-timeout')
  public runFnOnTimeout(
    @Body() body: InjectFnToSetTimeoutPayload,
  ) {
    setTimeout(body.fn, DEFAULT_TIMEOUT);
  }

  @Post('inject-fn-to-set-interval')
  public runFnOnInterval(
    @Body() body: InjectFnToSetIntervalPayload,
  ) {
    setInterval(body.fn, DEFAULT_INTERVAL);
  }

  @Post('inject-fn-to-eval')
  public runCode(
    @Body() body: InjectFnToEvalPayload,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    eval(body.code);
    res.json({
      success: true,
    })
  }

  @Post('inject-fn-to-function')
  public filterAndFetchProducts(
    @Body() body: InjectFnToFunctionPayload,
  ) {
    const filterFn = new Function(body.fnBody);
    return products.filter((item) => {
      return filterFn(item);
    });
  }

}
