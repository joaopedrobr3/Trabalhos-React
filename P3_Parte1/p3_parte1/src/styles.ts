import { StyleSheet } from 'react-native'

const BLUE = '#2d4fbd'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2a5e',
  },

  header: {
    backgroundColor: '#1a2a5e',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 24,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginTop: 20
  },

  background: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    padding: 16,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
    
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1c1c1e',
    marginBottom: 12,
  },

  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1c1c1e',
    marginBottom: 6,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: BLUE,
    borderRadius: 8,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    height: 48,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#1c1c1e',
  },

  eyeButton: {
    paddingHorizontal: 12,
    height: 48,
    justifyContent: 'center',
  },

  eyeIcon: {
    fontSize: 18,
  },

  button: {
    backgroundColor: BLUE,
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },

  forgotRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  forgotIcon: {
    fontSize: 14,
  },

  forgotText: {
    color: BLUE,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
})