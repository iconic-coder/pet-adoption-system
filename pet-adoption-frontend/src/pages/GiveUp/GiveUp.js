import GiveUpForm from '../../components/GiveUpForm/GiveUpForm';

const GiveUp = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Give Up a Pet</h1>
      <p>We understand that sometimes circumstances change. We are here to help find a loving home for your pet.</p>
      <GiveUpForm />
    </div>
  );
};

export default GiveUp;