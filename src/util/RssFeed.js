import { useEffect, useState } from 'react';

import axios from 'axios';

const fetchRssFeed = async (url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');

        const parsedItems = Array.from(items).map((item) => {
            const atomLink = item.getElementsByTagNameNS('*', 'link')[0];
            const atomHref = atomLink ? atomLink.attributes.href.value : null;

            const linkElements = item.getElementsByTagName('link');
            const link = linkElements.length > 0 ? linkElements[0].textContent : '';
            return {
                title: item.querySelector('title').textContent,
                description: item.querySelector('description').innerHTML,
                link,
                pubDate: item.querySelector('pubDate').textContent,
                updated: item.querySelector('updated').textContent,
                guid: item.querySelector('guid').textContent,
                category: item.querySelector('category').textContent,
                thumb: item.querySelector('thumb').textContent,
                image: item.querySelector('image').textContent,
                atomLink: atomHref,
            };
        });

        return parsedItems;
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        return [];
    }
};
const getRssFeedDetail = async (url, callback) => {
    try {
        const response = await axios.get(url);
        const html = response.data;

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const title = doc.querySelector('title').innerText;
        const sapo = doc.querySelector('div.article__sapo').textContent;
        const body = doc.querySelector('div.article__body').innerHTML;
        const tag = doc.querySelector('div.article__tag').innerHTML;
        // const more = doc.querySelector('div.more-story-3').innerHTML;
        // const mgbox = doc.querySelector('div.mgbox').innerHTML;
        const img = document.querySelectorAll('img');
        img.forEach((img) => {
            const src = img.getAttribute('src');
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
                img.setAttribute('src', dataSrc);
                img.removeAttribute('data-src');
            }
            // Sử dụng các giá trị thuộc tính ở đây
            console.log('Src:', src);
            console.log('data-src:', dataSrc);
        });

        callback({ title, sapo, body, tag });


        // const more = doc.querySelector('div.more-story-3').innerHTML;


        // callback({ title, sapo, body, tag, more });

    } catch (error) {
        console.log('Lỗi: ' + error);
    }
};


export { fetchRssFeed, getRssFeedDetail };
