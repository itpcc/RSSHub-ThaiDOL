module.exports = {
    'soc.go.th': {
        _name: 'สำนักเลขาธิการคณะรัฐมนตรี (Thaland Secretary of Cabinet)',
        announce: [
            {
                title: 'ราชกิจจานุเบกษา (Thailand Royal Gazette)',
                docs: 'https://docs.rsshub.app/routes/government#thailand-royal-gazette',
                source: '/',
                target: (params, url, document) => {
                    const queryParams = new URL(url).searchParams;
                    let rssPath = '/soc/ratchakitcha';
                    /* if (!queryParams.has('searchconcerned')) {
                        return rssPath;
                    }

                    rssPath += `/${encodeURIComponent(queryParams.get('searchconcerned'))}`;

                    const province = document && document.querySelector('#searchprovince').value !== '' ? document.querySelector(`#searchprovince option[value="${document.querySelector('#searchprovince').value}"]`).text() : '';

                    const office = document && document.querySelector('#searchoffice').value !== '' ? document.querySelector(`#searchoffice option[value="${document.querySelector('#searchoffice').value}"]`).text() : '';

                    if (!province || !office) {
                        return rssPath;
                    }

                    rssPath += `/${encodeURIComponent(province)}/${encodeURIComponent(office)}`; */

                    return rssPath;
                },
            },
        ],
    },
};
