import { Button } from './index';

export default {
  title: 'Components/Button',
};

export const Overview = () => /*html*/ `
  <div>
    <div>
      ${Button({ children: 'Enviar' })}
    </div>
    <br />
    <div>
      ${Button({ children: 'Cancelar', style: 'background-color: red' })}
    </div>
  </div>
`;
