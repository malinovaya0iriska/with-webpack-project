import {Post} from "@models/Post";
import json from './assets/json.json';
import WebpackLogo from '/assets/webpack-logo.png';
import xml from './assets/data.xml';
import csv from './assets/data.csv';
import "./styles/styles.css";

const post = new Post('Webpack', WebpackLogo);

console.log('post to string:', post.toString());

console.log('JSON:', json);
console.log('XML:', xml);
console.log('CSV:', csv);
