const test = QUnit.test;

import './html-equal.js';
import makeHtmlTemplate from '../src/make-html-template.js';


const image = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
}



test('test template HTML to match coded HTML', assert => {
    
    
    const result = makeHtmlTemplate(image);

    const expected = `
        <li>
            <h2>UniWhal</h2>
            <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        </li>
        `;

    // assert
    assert.htmlEqual(result, expected);

});