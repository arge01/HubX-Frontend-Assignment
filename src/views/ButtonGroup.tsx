import ButtonIcon from '../svg/ButtonIcon';
import { ChildPageWithProps, buttonContainer } from './Main';

type Props = ChildPageWithProps;

function ButtonGroup({ page, setPage }: Props) {
  return (
    <ul>
      {buttonContainer.map((v, k) => (
        <li key={k} className={`${v?.page === page ? 'active' : ''}`}>
          <a
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              e.preventDefault();
              setPage(v?.page);
            }}
            href="#"
          >
            <span
              className={`icon ${v?.icon} ${v?.page === page && 'button-cricle'}`}
            >
              <ButtonIcon icon={v?.icon} />
            </span>
            <div className="text">{v?.text}</div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ButtonGroup;
