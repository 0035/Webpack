//main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.scss';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));