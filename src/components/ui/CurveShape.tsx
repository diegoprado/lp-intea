import React from 'react';
import Icon from './Icon';

type CurveType = 'up' | 'down';

interface CurveShapeProps {
  type?: CurveType;
  fill?: string;
  height?: string | number;
  className?: string;
  hasIconDown?: boolean;
}

/**
 * Componente para criar curvas SVG na parte inferior ou superior de seções
 * Usa arquivos SVG externos da pasta /public/svgs/
 */
const CurveShape: React.FC<CurveShapeProps> = ({
  type = 'down',
  fill = 'white',
  height = '80px',
  className = '',
  hasIconDown = false,
}) => {
  const heightValue = typeof height === 'number' ? `${height}px` : height;

  // Nome do arquivo baseado no tipo
  const filename = `curve-${type}.svg`;

  return (
    <div
      className={`w-full overflow-hidden absolute left-0 right-0 ${
        type === 'up' ? 'bottom-0' : 'top-0'
      } ${className}`}
      style={{ height: heightValue }}
    >
      <div
        className='w-full h-full'
        style={{
          backgroundImage: `url('/svgs/${filename}')`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: fill !== 'white' ? `drop-shadow(0 0 0 ${fill})` : undefined,
        }}
      >
        <div className='w-full flex items-center justify-center'>
          {hasIconDown && (
            <Icon name='arrow-down' size='lg' color='white' className='mt-10' />
          )}
        </div>
      </div>
    </div>
  );
};

export default CurveShape;
