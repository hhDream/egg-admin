// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHero from '../../../app/controller/hero';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    hero: ExportHero;
    user: ExportUser;
  }
}
