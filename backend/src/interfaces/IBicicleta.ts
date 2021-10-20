export default interface IBicicleta {
    marca: string;
    modelo: string;
    rodado: string;
    tipo: string;
    especialidad: string;
    stock: number;

    read(): IBicicleta;
}
