// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHero from '../../../app/model/hero';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Hero: ReturnType<typeof ExportHero>;
    User: ReturnType<typeof ExportUser>;
  }
}
