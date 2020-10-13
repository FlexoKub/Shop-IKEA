'use strict';

// import { data } from './catalog.js';
// console.log(data);
// import './catalog.js';
import {catalog} from './catalog.js';
// экспорт по дефолту
import generateHeader from './generateHeader.js';
import generateFooter from './generateFooter.js';
import generateCatalog from './generateCatalog.js';
import generateSubCatalog from './generateSubCatalog.js';
generateHeader();
generateFooter();
generateCatalog();
generateSubCatalog();

catalog();