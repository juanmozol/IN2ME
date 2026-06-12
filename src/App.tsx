import { LanguageProvider } from './contexts/LanguageContext';
import { usePassport } from './hooks/usePassport';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductIdentity from './components/ProductIdentity';
import DesignManifesto from './components/DesignManifesto';
import TraceabilityTimeline from './components/TraceabilityTimeline';
import Materials from './components/Materials';
import Manufacturing from './components/Manufacturing';
import LocalProduction from './components/LocalProduction';
import LongevityMultifunctionality from './components/LongevityMultifunctionality';
import CareInstructions from './components/CareInstructions';
import SocialImpact from './components/SocialImpact';
import Circularity from './components/Circularity';
import Footer from './components/Footer';

function LoadingScreen() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-6"
      style={{ backgroundColor: '#F5F4F1' }}
    >
      <span
        className="font-grotesk font-semibold tracking-widest"
        style={{ fontSize: '1.2rem', color: '#111111', letterSpacing: '0.25em' }}
      >
        IN2ME
      </span>
      <div className="flex items-center gap-2">
        {[0, 150, 300].map(delay => (
          <div
            key={delay}
            className="w-1 h-1 animate-bounce"
            style={{ backgroundColor: '#AAAAAA', borderRadius: '50%', animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function ErrorScreen({ message }: { message: string }) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center"
      style={{ backgroundColor: '#F5F4F1' }}
    >
      <span
        className="font-grotesk font-semibold tracking-widest mb-4"
        style={{ fontSize: '1.2rem', color: '#111111', letterSpacing: '0.25em' }}
      >
        IN2ME
      </span>
      <p className="font-montserrat" style={{ fontSize: '0.875rem', color: '#666666' }}>
        Unable to load passport data.
      </p>
      <p className="font-montserrat" style={{ fontSize: '0.75rem', color: '#AAAAAA' }}>{message}</p>
      <button onClick={() => window.location.reload()} className="btn-outline mt-4">
        Retry
      </button>
    </div>
  );
}

function PassportContent() {
  const {
    products,
    activeProduct,
    passportData,
    loading,
    productsLoading,
    error,
    setActiveProduct,
  } = usePassport();

  if (productsLoading) return <LoadingScreen />;
  if (error && !passportData) return <ErrorScreen message={error} />;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F4F1' }}>
      <Navigation />

      <Hero
        products={products}
        activeProduct={activeProduct}
        onProductChange={setActiveProduct}
      />

      {loading && !passportData ? (
        <LoadingScreen />
      ) : passportData ? (
        <>
          <ProductIdentity data={passportData} />
          <DesignManifesto />
          <TraceabilityTimeline timeline={passportData.timeline} />
          <Materials materials={passportData.materials} />
          <Manufacturing />
          <LocalProduction />
          <LongevityMultifunctionality />
          <CareInstructions />
          <SocialImpact />
          <Circularity />
          <Footer />
        </>
      ) : null}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PassportContent />
    </LanguageProvider>
  );
}
