import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../interfaces/IEvento';
import { listaDeEventosState } from '../atom';
import { obtertId } from '../../components/utils/util';

function useAdicionarEvento() {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if (evento.inicio < hoje) {
      throw new Error(
        'Eventos não podem ser cadastrados com a data menor que a atual.'
      );
    }
    evento.id = obtertId();
    return setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
  };
}

export default useAdicionarEvento;
