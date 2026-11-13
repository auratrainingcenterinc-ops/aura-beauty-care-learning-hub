import jsPDF from 'jspdf'
import 'jspdf-autotable'

export interface CertificateData {
  fullName: string
  completionDate: Date
  referenceNumber: string
  completedUnits: number
  totalUnits: number
  progressPercentage: number
}

export const generateCertificatePDF = (data: CertificateData) => {
  const doc = new jsPDF()
  
  // Header
  doc.setFontSize(24)
  doc.setFont('times', 'bold')
  doc.setTextColor(107, 70, 193) // Aura Purple
  doc.text('AURA BEAUTY CARE LEARNING HUB', 20, 30)
  
  doc.setFontSize(16)
  doc.setFont('times', 'normal')
  doc.setTextColor(0, 0, 0)
  doc.text('BEAUTY CARE (NAIL CARE) SERVICES NC II', 20, 40)
  
  // Organization
  doc.setFontSize(12)
  doc.text('AURA TRAINING AND ASSESSMENT CENTER INC.', 20, 50)
  doc.text('"Learn the Skills. Master the Art. Build Your Future."', 20, 55)
  
  // Certificate Title
  doc.setFontSize(20)
  doc.setFont('times', 'bold')
  doc.setTextColor(107, 70, 193)
  doc.text('CERTIFICATE OF COMPLETION', 20, 75)
  
  // Recipient
  doc.setFontSize(16)
  doc.setFont('times', 'normal')
  doc.setTextColor(0, 0, 0)
  doc.text(`This certifies that ${data.fullName}`, 20, 95)
  doc.text('has successfully completed the online learning modules for', 20, 105)
  doc.text('BEAUTY CARE (NAIL CARE) SERVICES NC II', 20, 115)
  
  // Completion Details
  doc.setFontSize(12)
  doc.text(`Completion Date: ${data.completionDate.toLocaleDateString()}`, 20, 135)
  doc.text(`Reference Number: ${data.referenceNumber}`, 20, 145)
  doc.text(`Progress: ${data.progressPercentage}% (${data.completedUnits}/${data.totalUnits} units)`, 20, 155)
  
  // Disclaimer
  doc.setFontSize(10)
  doc.setTextColor(128, 128, 128)
  doc.text('⚠️ DISCLAIMER: This certificate is for online learning completion only.', 20, 180)
  doc.text('It does not replace TESDA National Certificate or official competency assessment.', 20, 185)
  doc.text('Completion date: ' + data.completionDate.toLocaleDateString(), 20, 190)
  
  // Organization Info
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text('AURA TRAINING AND ASSESSMENT CENTER INC.', 20, 210)
  doc.text('Alaminos, Ilocos, Philippines | www.auratraining.com', 20, 215)
  
  // Save as PDF
  const blob = doc.output('blob')
  const url = URL.createObjectURL(blob)
  
  // Create download link
  const link = document.createElement('a')
  link.href = url
  link.download = `Aura_Beauty_Care_Certificate_${data.fullName.replace(/\s+/g, '_')}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  return url
}

// Generate unique reference number
export const generateReferenceNumber = () => {
  const prefix = 'AURA-'
  const timestamp = new Date().getTime().toString().slice(-6)
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return prefix + timestamp + random
}
