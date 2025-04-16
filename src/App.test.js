import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  // test('renders navigation bar with logo and links', () => {
  //   render(<App />);
    
  //   // Check for logo
  //   const logo = screen.getByAltText('logo');
  //   expect(logo).toBeInTheDocument();
    
  //   // Check for navigation links
  //   expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  //   expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
  //   expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument();
  //   expect(screen.getByRole('link', { name: /log in/i })).toBeInTheDocument();
  //   expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
  // });

  // test('renders main hero section', () => {
  //   render(<App />);
    
  //   expect(screen.getByText(/TechZenth Is Awarded Best Management Tools In 2020/i)).toBeInTheDocument();
  //   expect(screen.getByRole('button', { name: /download now/i })).toBeInTheDocument();
  //   expect(screen.getByRole('link', { name: /start free trial/i })).toBeInTheDocument();
  // });

  test('renders services section', () => {
    render(<App />);
    
    expect(screen.getByText(/Best Services/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Learn More/i).length).toBeGreaterThanOrEqual(3);
  });

  test('renders features section', () => {
    render(<App />);
    
    expect(screen.getByText(/Top Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Clean & Minimal Design/i)).toBeInTheDocument();
  });

  test('renders pricing section', () => {
    render(<App />);
    
    expect(screen.getByText(/Choose Your Pricing Plan/i)).toBeInTheDocument();
    expect(screen.getByText(/\$ 19/i)).toBeInTheDocument();
    expect(screen.getByText(/\$ 29/i)).toBeInTheDocument();
    expect(screen.getByText(/\$ 39/i)).toBeInTheDocument();
  });

  // test('renders footer section', () => {
  //   render(<App />);
    
  //   expect(screen.getByText(/Subscribe to Get Updates/i)).toBeInTheDocument();
  //   expect(screen.getByText(/Follow Us/i)).toBeInTheDocument();
  //   expect(screen.getByText(/2022 © TechZenth/i)).toBeInTheDocument();
  // });
});