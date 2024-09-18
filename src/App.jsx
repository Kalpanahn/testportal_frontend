
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import AdminLogin from './components/AdminLogin'
import CandidateLogin from './components/CandidateLogin'
import CandidateUpdateDetails from './pages/CandidateUpdateDetails'
import PreferedExamLocation from './pages/PreferedExamLocation'
import ContactVerification from './pages/ContactVerification'
import CandidateDetails from './pages/CandidateDetails'
import CandidatePayDetails from './pages/CandidatePayDetails'
import PaymentPage from './pages/PaymentPage '
import SlotBooking from './pages/SlotBooking'
import ExamResult from './pages/ExamResult'
import ExamResultPage from './pages/ExamResultpage'
import TestPage from './pages/Testpage'
import CandidateRegistartion from './components/CandidateRegistartion'
import PaymentForm from './pages/PaymentForm'
import DownloadAdmitCard from './pages/DownloadAdmitCard'
import PrintAdmitCard from './pages/PrintAdmitCard'
import PrintExamResult from './pages/PrintExamResult'
import CandidatesExamResult from './pages/CandidatesExamResult'
import CandidateImageCapture from './pages/CandidateImageCapture'
import AdmitCardDetails from './pages/AdmitCardDetails'


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
        <Route path='/CandidateLogin' element={<CandidateLogin />} />
        <Route path='/' element={<CandidateRegistartion />} />
          <Route path='/CandidateUpdateDetails' element={<CandidateUpdateDetails />} />
          <Route path='/PreferedExamLocation' element={<PreferedExamLocation />} />
          <Route path='/ContactVerification' element={<ContactVerification />} />
          <Route path='/CandidateDetails' element={<CandidateDetails />} />
          <Route path='/CandidatePayDetails' element={<CandidatePayDetails />} />
          <Route path='/PaymentPage' element={<PaymentPage />} />
          <Route path='/SlotBooking' element={<SlotBooking />} />
          <Route path='/ExamResult' element={<ExamResult />} />
          <Route path='/Home' element={<ExamResultPage />} />
          <Route path='/TestPage' element={<TestPage />} />
          <Route path='/PaymentForm' element={<PaymentForm />} />
          <Route path='/DownloadAdmitCard' element={<DownloadAdmitCard />} />
          <Route path='/PrintAdmitCard' element={<PrintAdmitCard />} />
          <Route path='/PrintExamResult' element={<PrintExamResult />} />
          <Route path='/examResults' element={<CandidatesExamResult />} />
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/candidateImageCapture' element={<CandidateImageCapture />} />
          <Route path='/admitCardDetails' element={<AdmitCardDetails />} />
      

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
