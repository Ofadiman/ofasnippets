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

const worksAsExpected = formatInvoiceDetails(invoice)

const worksLoL = formatInvoiceDetails(excessInvoice)

// @ts-expect-error
const doesNotWork = formatInvoiceDetails({ amount: 200, date: new Date(), wtf: 'should be here xd' })
