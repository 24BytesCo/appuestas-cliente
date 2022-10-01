export interface Result<T> {
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
  idPartido: string;
  fechaHoraInicial: string;
  fechaHoraFinal: string;

  equipoLocalNombre: string;
  equipoLocalCodigo: string;
  equipoLocalBandera: string;

  equipoVisitanteNombre: string;
  equipoVisitanteCodigo: string;
  equipoVisitanteBandera: string;

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
export interface EncuentroParams {
  minuto: string;
  tipoEventoId: string;
  equipoEventoId: string;
  partidoId: string;
}
export interface TipoEventoRes {
  id: string;
  descripcion: string;
  codigo: string;
}
