import Swal from 'sweetalert2';

export const alertaTiempo = function () {
  let timerInterval: any;
  Swal.fire({
    title: 'Validando Fechas...',
    html: 'Se cerrará automáticamente en <b></b> millisegundos.',
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b: any = Swal.getHtmlContainer()?.querySelector('b');
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer');
    }
  });
};

export const alertaEventos = function () {
  let timerInterval: any;
  Swal.fire({
    title: 'Validando Eventos...',
    html: 'Se cerrará automáticamente en <b></b> millisegundos.',
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b: any = Swal.getHtmlContainer()?.querySelector('b');
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer');
    }
  });
};

export const alertaPequeñaSuperiorDerecha = function (
  mensaje: string,
  error: boolean
) {
  console.log('mesaje', mensaje);

  if (error) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: '',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: 'error',
      title: '' + mensaje,
    });
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      text: '',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: 'success',
      title: '' + mensaje,
    });
  }
};
