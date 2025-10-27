function tryCatchFinally(){
    try{
        return a + b;
    }catch(error){
        alert("Este es el error");
    }
    finally{
        alert("Esto se ejecuta siempre");
    }
}