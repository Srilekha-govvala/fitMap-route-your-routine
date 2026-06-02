import html2pdf from 'html2pdf.js'

export const exportPlanToPDF = (planData, profile) => {
  const element = document.createElement('div')
  element.style.padding = '15px'
  element.style.fontFamily = 'Arial, sans-serif'
  element.style.backgroundColor = '#fff'
  element.style.color = '#000'

  const daysList = planData
    .map(
      (day) => `
    <div style="margin-bottom: 20px; page-break-inside: avoid;">
      <h2 style="color: #7c3aed; font-size: 22px; margin: 0 0 8px 0;">${day.day} - ${day.label}</h2>
      <div style="margin-left: 15px;">
        ${day.exercises
          .map(
            (exercise) => `
          <div style="margin-bottom: 10px; padding: 8px; border-left: 3px solid #7c3aed; background-color: #f9fafb;">
            <h3 style="margin: 0 0 3px 0; font-size: 14px; font-weight: bold;">${exercise.name}</h3>
            <p style="margin: 0 0 2px 0; color: #666; font-size: 12px;"><strong>Sets:</strong> ${exercise.sets}</p>
            <p style="margin: 0; color: #666; font-size: 11px;">${exercise.tip}</p>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `
    )
    .join('')

  const proteinTarget = Math.round(profile.weight * 1.5)

  element.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <h1 style="color: #7c3aed; font-size: 32px; margin: 0 0 5px 0;">Your FitMap Plan</h1>
      <p style="color: #666; font-size: 13px; margin: 0;">Route your routine</p>
    </div>

    <div style="background-color: #f3f4f6; padding: 12px; border-radius: 6px; margin-bottom: 15px;">
      <h3 style="color: #7c3aed; margin: 0 0 8px 0; font-size: 16px;">Your Profile</h3>
      <p style="margin: 3px 0; font-size: 13px;"><strong>Age:</strong> ${profile.age} years</p>
      <p style="margin: 3px 0; font-size: 13px;"><strong>Weight:</strong> ${profile.weight} kg</p>
      <p style="margin: 3px 0; font-size: 13px;"><strong>Protein Target:</strong> ~${proteinTarget}g/day</p>
    </div>

    <h2 style="color: #7c3aed; font-size: 24px; margin: 10px 0 8px 0; padding-bottom: 8px; border-bottom: 2px solid #7c3aed;">Weekly Plan</h2>
    ${daysList}

    <div style="margin-top: 20px; padding-top: 15px; border-top: 2px solid #e5e7eb; text-align: center; color: #999; font-size: 11px;">
      <p style="margin: 3px 0;">Generated with FitMap - Route your routine</p>
      <p style="margin: 3px 0;">${new Date().toLocaleDateString()}</p>
    </div>
  `

  const opt = {
    margin: 8,
    filename: `FitMap_Plan_${new Date().toISOString().split('T')[0]}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' },
  }

  html2pdf().set(opt).from(element).save()
}
