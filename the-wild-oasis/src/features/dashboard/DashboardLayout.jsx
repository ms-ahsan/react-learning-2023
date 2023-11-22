/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { useRecentBookings } from './useRecentBookings';
import Spinner from '../../ui/Spinner';
import { useRecentStays } from './useRecentStays';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading } = useRecentBookings();
  const {
    stays,
    confirmedSttays,
    isLoading: isLoadingStays,
  } = useRecentStays();

  if (isLoading || isLoadingStays) return <Spinner />;

  console.log(bookings);
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>chart stay duration</div>
      <div>chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
