import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    paddingHorizontal: 18,
    paddingTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1f2937',
  },
  form: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  input: {
    backgroundColor: '#f1f3f5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#111827',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAdd: {
    backgroundColor: '#2563eb',
  },
  buttonPrimary: {
    backgroundColor: '#16a34a',
  },
  buttonSecondary: {
    backgroundColor: '#9ca3af',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  list: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  cardPaid: {
    opacity: 0.8,
  },
  cardTextWrap: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  cardAmount: {
    fontSize: 15,
    color: '#374151',
    marginBottom: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: '700',
    overflow: 'hidden',
    color: '#fff',
  },
  badgePaid: {
    backgroundColor: '#16a34a',
  },
  badgePending: {
    backgroundColor: '#f59e0b',
  },
  emptyText: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 15,
  },
  totalBar: {
    backgroundColor: '#111827',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginTop: 8,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    color: '#e5e7eb',
    fontSize: 15,
    fontWeight: '700',
  },
  totalValue: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
});

export default styles;
