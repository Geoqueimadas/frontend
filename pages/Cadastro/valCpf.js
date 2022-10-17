class ValidaCpf  {
    constructor(props){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: false,
            value: props.replace(/\D+/g, '')
        })
    }

    geraCpf(){
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const dig1 = ValidaCpf.geraDigito(cpfSemDigito);
        const dig2 = ValidaCpf.geraDigito(cpfSemDigito + dig1);
        this.novoCpf = cpfSemDigito + dig1 +dig2;
    }

    static geraDigito(cpfSemDig){
        let total = 0;
        let rev = cpfSemDig.length + 1;
        for(let i of cpfSemDig){
            total += rev * Number(i);
            rev--
        }

        const digito = 11 - (total%11);
        return digito <= 9 ? String(digito) : '0' 
    }

    cpfSeq(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        this.geraCpf(); 
        return this.novoCpf === this.cpfLimpo
    }
}

export default ValidaCpf