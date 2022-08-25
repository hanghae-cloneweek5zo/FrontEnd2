/* eslint-disable no-loop-func */
import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment; //today == moment()
  const nextMonth = getMoment.clone().add(1, 'month');
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();
  const nextMonthFirstWeek = nextMonth.startOf('month').week();
  const nextMonthLastWeek =
    nextMonth.endOf('month').week() === 1
      ? 53
      : nextMonth.endOf('month').week();

  const calenderArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((_d, idx) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(idx, 'day');
              if (days.format('MM') !== today.format('MM')) {
                return (
                  <td key={idx} style={{ color: 'transparent' }}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
              return (
                <td key={idx}>
                  <span>{days.format('D')}</span>
                </td>
              );
            })}
        </tr>
      );
    }
    return result;
  };
  const calenderArrNextMonth = () => {
    let result = [];
    let week = nextMonthFirstWeek;
    for (week; week <= nextMonthLastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((_d, idx) => {
              let days = nextMonth
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(idx, 'day');
              if (
                days.format('MM') !==
                getMoment.clone().add(1, 'month').format('MM')
              ) {
                return (
                  <td key={idx} style={{ color: 'transparent' }}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
              return (
                <td key={idx}>
                  <span>{days.format('D')}</span>
                </td>
              );
            })}
        </tr>
      );
    }
    return result;
  };
  return (
    <React.Fragment>
      <Wrap>
        <Left>
          <LeftMonth>
            <span style={{ textAlign: 'center' }}>
              <LeftArrow
                onClick={() => {
                  setMoment(getMoment.clone().subtract(1, 'month'));
                }}
                disabled={
                  getMoment.format('MM') == new Date().getMonth() + 1
                    ? true
                    : false
                }
              >
                <svg
                  viewBox="0 0 18 18"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: '12px',
                    width: '12px',
                    display: 'block',
                    fill: 'currentcolor',
                  }}
                >
                  <path
                    d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </LeftArrow>
              {today.format('YYYY 년 MM 월')}
              <br />
              <br />
              <text
                style={{
                  fontWeight: '600',
                  color: 'gray',
                  fontSize: '12px',
                  letterSpacing: '14.5px',
                }}
              >
                일 월 화 수 목 금 토
              </text>
            </span>
          </LeftMonth>
          <LeftCalendar>
            <Day>
              <tbody>{calenderArr()}</tbody>
            </Day>
          </LeftCalendar>
        </Left>
        <Right>
          <RightMonth>
            <span style={{ textAlign: 'center' }}>
              {nextMonth.format('YYYY 년 MM 월')}
              <RightArrow
                onClick={() => {
                  setMoment(getMoment.clone().add(1, 'month'));
                }}
              >
                <svg
                  viewBox="0 0 18 18"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: '12px',
                    width: '12px',
                    display: 'block',
                    fill: 'currentcolor',
                  }}
                >
                  <path
                    d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </RightArrow>
              <br />
              <br />
              <text
                style={{
                  fontWeight: '600',
                  color: 'gray',
                  fontSize: '12px',
                  letterSpacing: '14.5px',
                }}
              >
                일 월 화 수 목 금 토
              </text>
            </span>
          </RightMonth>
          <RightCalendar>
            <Day>
              <tbody>{calenderArrNextMonth()}</tbody>
            </Day>
          </RightCalendar>
        </Right>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  font-weight: 500;
  transition: 0.35s linear;
`;
const Right = styled.div``;
const RightMonth = styled.div`
  display: flex;
  color: black;
  justify-content: center;
`;
const RightCalendar = styled.div``;
const Left = styled.div``;
const LeftMonth = styled.div`
  display: flex;
  color: black;
  justify-content: center;
`;
const LeftCalendar = styled.div``;
const RightArrow = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
  justify-content: end;
  float: right;
  padding-bottom: 8px;
`;
const LeftArrow = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  color: ${(props) => (props.disabled ? '#cccccc' : 'black')};
  background-color: transparent;
  border: none;
  cursor: ${(props) => (props.disabled ? ' ' : 'pointer')};
  float: left;
  padding-bottom: 8px;
`;
const Day = styled.table`
  border-collapse: separate;
  border-spacing: 1.5rem 1.5rem;
  cursor: pointer;
`;

export default Calendar;
