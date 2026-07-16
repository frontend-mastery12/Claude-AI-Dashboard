// Data contract (per context.md): id, date, member, service, paymentMethod, amount, status
export const initialTransactions = [
  {
    id: 'txn_001',
    date: '2026-05-01',
    member: 'Ali Khan',
    service: 'Premium Membership',
    paymentMethod: 'Card',
    amount: 120.0,
    status: 'Completed',
  },
  {
    id: 'txn_002',
    date: '2026-05-02',
    member: 'Sarah Jenkins',
    service: 'Whey Protein Isolate',
    paymentMethod: 'Apple Pay',
    amount: 64.99,
    status: 'Completed',
  },
  {
    id: 'txn_003',
    date: '2026-05-03',
    member: 'Marcus Vance',
    service: '1-on-1 Personal Training',
    paymentMethod: 'Card',
    amount: 150.0,
    status: 'Pending',
  },
  {
    id: 'txn_004',
    date: '2026-05-04',
    member: 'Emily Zhao',
    service: 'Creatine Monohydrate',
    paymentMethod: 'Google Pay',
    amount: 29.99,
    status: 'Completed',
  },
  {
    id: 'txn_005',
    date: '2026-05-04',
    member: 'David Beck',
    service: 'HIIT Class Booking',
    paymentMethod: 'Cash',
    amount: 20.0,
    status: 'Failed',
  },
  {
    id: 'txn_006',
    date: '2026-05-05',
    member: 'Sophia Al-Jamil',
    service: 'Annual Gym Pass',
    paymentMethod: 'Bank Transfer',
    amount: 450.0,
    status: 'Completed',
  },
]

export const STATUS_FILTERS = ['All', 'Completed', 'Pending', 'Failed']
export const PAYMENT_METHODS = ['All', 'Card', 'Apple Pay', 'Google Pay', 'Cash', 'Bank Transfer']
