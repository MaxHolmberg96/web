import { useState, type Dispatch, type SetStateAction, type ReactNode, HTMLAttributes } from 'react';
import { Panel } from '@xyflow/react';

import NodeInspector from './NodeInspector';
import ChangeLogger from './ChangeLogger';

export default function ReactFlowDevTools() {
  const [nodeInspectorActive, setNodeInspectorActive] = useState(false);
  const [changeLoggerActive, setChangeLoggerActive] = useState(false);

  return (
    <div className="react-flow__devtools">
      <Panel position="top-left">
        <DevToolButton setActive={setNodeInspectorActive} active={nodeInspectorActive} title="Toggle Node Inspector">
          Node Inspector
        </DevToolButton>
        <DevToolButton setActive={setChangeLoggerActive} active={changeLoggerActive} title="Toggle Change Logger">
          Change Logger
        </DevToolButton>
      </Panel>
      {changeLoggerActive && <ChangeLogger />}
      {nodeInspectorActive && <NodeInspector />}
    </div>
  );
}

function DevToolButton({
  active,
  setActive,
  children,
  ...rest
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button onClick={() => setActive((a) => !a)} className={active ? 'active' : ''} {...rest}>
      {children}
    </button>
  );
}
