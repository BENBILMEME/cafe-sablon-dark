import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error('[ErrorBoundary] Unhandled error:', error, info?.componentStack);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',minHeight:'100vh',background:'#0f1411',color:'#9dac9f',fontFamily:'Georgia,serif',padding:'24px',textAlign:'center',flexDirection:'column',gap:'16px'}}>
          <p style={{fontSize:'1.5rem',color:'#e8e4db'}}>Bir hata oluştu</p>
          <p style={{fontSize:'0.9rem'}}>Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.</p>
          <button onClick={() => window.location.reload()} style={{padding:'12px 24px',background:'#D4A853',color:'#0f1411',border:'none',borderRadius:'9999px',fontWeight:600,cursor:'pointer',fontSize:'0.9rem'}}>Yenile</button>
        </div>
      );
    }
    return this.props.children;
  }
}
