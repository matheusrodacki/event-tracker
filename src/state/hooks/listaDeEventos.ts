import { useRecoilValue } from 'recoil';
import { listaDeEventosState } from '../atom';

function useListaDeEventos() {
  return useRecoilValue(listaDeEventosState);
}

export default useListaDeEventos;
