/*package com.smydata.businessplan.controller.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.Calendar;

import javax.servlet.http.HttpSession;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;

import com.smydata.businessplan.controller.RewardsController;
import com.smydata.businessplan.service.RewardsService;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.Rewards;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class RewardsControllerTest {

	@Mock
	private RewardsService rewardsServiceMock;
	
	@InjectMocks
	private RewardsController rewardsController;
	
	private static MockHttpServletRequest request;
	
	@BeforeClass
	public static void initObjects() {
		 request = new MockHttpServletRequest();
		HttpSession session = request.getSession(true);
		Registration registration = new Registration();
		registration.setMobile("8978446891");
		session.setAttribute("registration", registration);
	}
	
	@AfterClass
	public static void clear() {
		HttpSession session = request.getSession();
		session.removeAttribute("registration");
	}
	
	@Ignore
	@Test
	public void testSuccessSaveRewards(){
		
		Rewards reward = getRewardsMetadata();
		when(rewardsServiceMock.saveReward(Mockito.any(Rewards.class))).thenReturn(reward);
		ResponseEntity<?> result = rewardsController.saveRewards(reward, request);
		
		assertEquals(HttpStatus.OK, result.getStatusCode());
		assertNotNull(result.getBody());
		verify(rewardsServiceMock).saveReward(reward);;
		verify(rewardsServiceMock, times(1)).saveReward(reward);
	}
	
	@Ignore
	@Test
	public void testFailureSaveRewards(){
		
		Rewards reward = null;
//		when(rewardsServiceMock.saveReward(Mockito.any(Rewards.class))).thenReturn(reward);
		ResponseEntity<?> result = rewardsController.saveRewards(reward, request);
		
		assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
		verify(rewardsServiceMock).saveReward(reward);
		verify(rewardsServiceMock, times(1)).saveReward(reward);
	}
	
	@Ignore
	@Test
	public void testSuccessGetRewards(){
		
		Rewards reward = getRewardsMetadata();
		String mobile = "8978446891";
		long businessId = 112;
		when(rewardsServiceMock.getRewards(mobile,businessId)).thenReturn(reward);
		ResponseEntity<?> result = rewardsController.getRewards(request);
		
		assertEquals(HttpStatus.OK, result.getStatusCode());
		assertNotNull(result.getBody());
		verify(rewardsServiceMock).getRewards(mobile,businessId);
		verify(rewardsServiceMock, times(1)).getRewards(mobile,businessId);
	}
	
	@Ignore
	@Test
	public void testFailureGetRewards(){
		
		Rewards reward = null;
		String mobile = "8978446891";
		long businessId = 112;
		when(rewardsServiceMock.getRewards(mobile,businessId)).thenReturn(reward);
		ResponseEntity<?> result = rewardsController.getRewards(request);
		
		assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
		verify(rewardsServiceMock).getRewards(mobile,businessId);
		verify(rewardsServiceMock, times(1)).getRewards(mobile,businessId);
	}
	private Rewards getRewardsMetadata() {
		Calendar currenttime = Calendar.getInstance();
		Rewards reward = new Rewards();
		reward.setBonusEndDate(new Date((currenttime.getTime()).getTime()));
		reward.setBonusPointEnale(true);
		reward.setBonusPoints(50);
		reward.setBonusStartDate(new Date((currenttime.getTime()).getTime()));
		reward.setCashValue(100);
		reward.setEffectiveAmount(1000);
		reward.setEnable(true);
		reward.setMobile("8978446891");
		reward.setRewardEndDate(new Date((currenttime.getTime()).getTime()));
		reward.setRewardPointEnable(true);
		reward.setRewardPointEnable(true);
		reward.setRewardStartDate(new Date((currenttime.getTime()).getTime()));
		return reward;
	}
}
*/