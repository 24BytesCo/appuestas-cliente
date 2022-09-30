export interface Result<T> {
  pageNumber: string;
  pageSize: string;
  succeeded: string;
  message: string;
  errors: string;
  data: T;
}

export interface LoginRes {
  code: string;
  nombreCompleto: string;
  nickName: string;
  tipoUsuarioCode: string;
}

export interface PaisRes {
  idPais: string;
  banderaPais: string;
  abreviatura: string;
  nombrePais: string;
}
export interface EncuentosRes {
  fechaHoraInicial: string;
  fechaHoraFinal: string;
  equipoLocalNombre: string;
  equipoLocalBandera: string;
  equipoLocalCodigo: string;
  equipoVisitanteNombre: string;
  equipoVisitanteBandera: string;
  equipoVisitanteCodigo: string;
  marcadorLocal: string;
  marcadorVisitante: string;
  estadoEncuentro: string;
  minutosEncuentro: string;
}

export interface UlrEnv {
  urlApi: string;
  production: boolean;
}
export interface DuracionEvento {
  descripcion: string;
  valor: number;
}

export interface Encuentro {
  paisVisitante: string;
  paisLocal: string;
  duracionMinutos: number;
  fechaHoraInicio: string;
  fechaHoraFin: string;
}
