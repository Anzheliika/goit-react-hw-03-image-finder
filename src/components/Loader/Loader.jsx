import { MagnifyingGlass } from 'react-loader-spinner';

const LoaderSpiner = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    aligniitems: 'center',
  };
  return (
    <div style={style}>
      <MagnifyingGlass
        visible={true}
        height="200"
        width="200"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#B8C6F3"
        color="#325DEE"
      />
    </div>
  );
};

export default LoaderSpiner;
