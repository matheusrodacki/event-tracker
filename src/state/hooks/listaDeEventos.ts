import { useRecoilValue } from 'recoil';
import { eventosFiltradosState } from '../selector';

function useListaDeEventos() {
  return useRecoilValue(eventosFiltradosState);
}

export default useListaDeEventos;
