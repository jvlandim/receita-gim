$(document).ready(function(){
    
    $('#formulario').change(function(){

        var valor = $(this).val()

        if(valor<1){

            valor = 1
            $(this).val(valor)
        
        }

        var valorGin = 0.5
        valorGin = valorGin * valor
        $('#numero-gin').val(valorGin)

        var valortonica = 1
        valortonica = valortonica * valor
        $('#numero-tonica').val(valortonica)

        var valorlimao = 2
        valorlimao = valorlimao * valor
        $('#numero-limao').val(valorlimao)

       
    
    
    })
    
    $('#torresmo').change(function(){

        var valor = $(this).val()

        if(valor<1){

            valor = 1
            $(this).val(valor)
        
        }

        var valorporco = 1.5
        valorporco = valorporco * valor
        $('#numero-porco').val(valorporco)

        var valorsal = 0.5
        valorsal = valorsal * valor
        $('#numero-sal').val(valorsal)

        var valorbanha = 3
        valorbanha = valorbanha * valor
        $('#numero-banha').val(valorbanha)
    })


    $("#seja-socio").click(function(){

        $(".botafogo").animate({
            height: "toggle"
          }, 1000)

    })

    $("#botafogo-fechar").click(function(){

        $(".botafogo").animate({
            height: "toggle"
          }, 1000)

    })



 });