const
    url = "MERCADO-NA-REDE-DF",
    host =
        process.env.NODE_ENV === 'production'
            ? "http://desenv.mercadonarede.com.br/mnr-api/api.php"
            : "http://192.168.1.111/mnr-api/api.php",

    mode =
        process.env.NODE_ENV !== 'production'
            ? 'cors'
            : undefined,

    getRequestHeaders = () => new Headers({
        'Accept': 'application/json'
    });

export const
    getCatalogo = () =>
        fetch(`${host}/catalogo?cnpj=02619740000136&tipo=2&q=&p=`, { method : 'GET', mode })
            .then(response => response.json())
            .catch(err => console.error(err))
    ,

    getCliente = () =>
        fetch(`${host}/catalogo?url=${url}`, { method : 'GET', mode })
            .then(response => response.json())
            .catch(err => console.error(err))
;