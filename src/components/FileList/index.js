import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink} from 'react-icons/md'
import { Container, FileInfo, Preview } from './styles';

const FileList = () => (
  <Container>
    <li>
        <FileInfo>
            <Preview src="teste.com"></Preview>
            <div>
                <strong>nome.txt</strong>
                <span>tamanhokb <button>Excluir</button></span>
            </div>
        </FileInfo>
        <div>
            <CircularProgressbar
            styles={{
              root: { width: 20 },
              path: { stroke: '#7159c1'}
            }}
            strokeWidth={10}
            value={60}
            />
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MdLink style={{ marginRight: 8}} size={24} color="#222" />
            </a>
            <MdCheckCircle size={24} color="green" />
            <MdError size={24} color="#e57878" />
        </div>
    </li>
  </Container>

);

export default FileList;
