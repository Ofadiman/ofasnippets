interface Invoice {
  amount: number
  date: Date
}

const formatInvoiceDetails = (invoice: Invoice): string => {
  return `Cost: ${invoice.amount}, Date: ${invoice.date.toISOString()}.`
}

const invoice = {
  amount: 200,
  date: new Date()
}

const excessInvoice = {
  amount: 200,
  date: new Date(),
  wtf: 'should be here xd'
}

const worksWithRequiredProperties = formatInvoiceDetails(invoice)
const worksWithExcessProperties = formatInvoiceDetails(excessInvoice)

const doesNotWorkBecauseExcessPropertyCheck = formatInvoiceDetails({
  amount: 200,
  date: new Date(),
  // @ts-expect-error
  excessPropertyCheck: 'excessPropertyCheck'
})
