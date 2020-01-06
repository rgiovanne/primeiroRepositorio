new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },

    computed:{

        resultado(){
            return this.valor ==37 ? 
            'Valor igual' : "Valor diferente que 36"
        }
    },

    watch:{

        resultado(novo, antigo){
            console.log(novo,antigo);

            setTimeout(()=>{
                this.valor = 0
            }, 5000)
        }
    }
});