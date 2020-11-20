class Controller {

    static exibeApod(){

        let requestApod = new XMLHttpRequest();

        let data = new Date();

        console.log(data)

        requestApod.open('GET',`https://api.nasa.gov/planetary/apod?api_key=PVopjkYuVhBKkOwWb7GmVKNeTLDJZyZ0rarIBxSP&end_date=2020-11-10`, false)

        requestApod.addEventListener('load', function(){

            let dados = JSON.parse(this.responseText)

            let imagem = dados.url

            let model = new Model(imagem) 

            View.inserirHTML(model.modelo)
            
        })


        requestApod.send()
    }
}