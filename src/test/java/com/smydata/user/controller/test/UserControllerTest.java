package com.smydata.user.controller.test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

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

import com.smydata.businessplan.service.DiscountsService;
import com.smydata.businessplan.service.InvoiceDetailService;
import com.smydata.businessplan.service.RewardsService;
import com.smydata.registration.model.Discounts;
import com.smydata.registration.model.Invoice;
import com.smydata.registration.model.Registration;
import com.smydata.registration.model.Rewards;
import com.smydata.registration.model.User;
import com.smydata.user.controller.UserController;
import com.smydata.user.service.UserService;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class UserControllerTest {

	@Mock
	private RewardsService rewardsServiceMock;
	
	@Mock
	private DiscountsService discountsServiceMock;
	
	@Mock
	private InvoiceDetailService invoiceDetailServiceMock;
	
	@Mock
	private UserService userServiceMock;
	
	@InjectMocks
	private UserController userController;
	
	private static MockHttpServletRequest request;
	
	@BeforeClass
	public static void initObjects() {
		 request = new MockHttpServletRequest();
		HttpSession session = request.getSession(true);
		Registration registration = new Registration();
		registration.setMobile("8978446892");
		session.setAttribute("registration", registration);
	}
	
	@AfterClass
	public static void clear() {
		HttpSession session = request.getSession();
		session.removeAttribute("registration");
	}
	
	@Ignore
	@Test
	public void testSaveUser() {
		Rewards reward = getRewardsMetadata();
		List<Discounts> discounts = getDiscountsMetadata();
		List<Invoice> invoiceList = getInvoiceMetadata();
		User user = getUserMetadata();
		String mobile = "8978446892";
		long businessId = 112;
//		when(rewardsServiceMock.getRewards(mobile,businessId)).thenReturn(reward);
		when(discountsServiceMock.getDiscountDetails(businessId)).thenReturn(discounts);
		when(invoiceDetailServiceMock.getInvoice(mobile)).thenReturn(invoiceList);
		when(userServiceMock.saveCustomer(Mockito.any(User.class))).thenReturn(user);
		
		ResponseEntity<?> response = userController.createUser(user,123, request);
		
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertNotNull(response.getBody());
		verify(discountsServiceMock).getDiscountDetails(businessId);
		verify(discountsServiceMock, times(1)).getDiscountDetails(businessId);
		verify(rewardsServiceMock).getRewards(businessId);
		verify(rewardsServiceMock, times(1)).getRewards(businessId);
		verify(invoiceDetailServiceMock).getInvoice(mobile);
		verify(invoiceDetailServiceMock, times(1)).getInvoice(mobile);
		verify(userServiceMock).saveCustomer(user);
		verify(userServiceMock, times(1)).saveCustomer(user);
	}
	
	@Ignore
	@Test
	public void testSaveUserFailure() {
		User user = null;
		ResponseEntity<?> response = userController.createUser(user,123, request);
		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
	}
	
	@Ignore
	@Test
	public void testGetUserDetailSuccess() {
		User user = getUserMetadata();
		List<Discounts> discounts = getDiscountsMetadata();
		String mobile = "8978446892";
		long businessId = 112;
		when(userServiceMock.findCustomer(mobile)).thenReturn(user);
		when(discountsServiceMock.getDiscountDetails(businessId)).thenReturn(discounts);
		
		ResponseEntity<?> response = userController.getUserDetail(mobile,123, request);
		
		assertEquals(HttpStatus.OK, response.getStatusCode());
		assertNotNull(response.getBody());
		
		verify(userServiceMock).findCustomer(mobile);
		verify(userServiceMock, times(1)).findCustomer(mobile);
		verify(discountsServiceMock).getDiscountDetails(businessId);
		verify(discountsServiceMock, times(1)).getDiscountDetails(businessId);
	}
	
	@Ignore
	@Test
	public void testGetUserDetailFailure() {
		User user = null;
		String mobile = "8978446892";
		when(userServiceMock.findCustomer(mobile)).thenReturn(user);
		
		ResponseEntity<?> response = userController.getUserDetail(mobile,123, request);
		
		assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
		
		verify(userServiceMock).findCustomer(mobile);
		verify(userServiceMock, times(1)).findCustomer(mobile);
	}
	
	private User getUserMetadata() {
		User user = new User();
		Calendar currenttime = Calendar.getInstance();
		user.setAddress("Hyd");
		user.setCreateDate(new Date((currenttime.getTime()).getTime()));
		user.setEmail("dsp@yahoo.com");
		user.setRewardPoints(0);
		user.setUserMobile("8978446892");
		user.setUserName("Dsp");
		return user;
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
		reward.setMobile("8978446892");
		reward.setRewardEndDate(new Date((currenttime.getTime()).getTime()));
		reward.setRewardPointEnable(true);
		reward.setRewardPointEnable(true);
		reward.setRewardStartDate(new Date((currenttime.getTime()).getTime()));
		return reward;
	}
	
	private List<Discounts> getDiscountsMetadata() {
		List<Discounts> discounts = new ArrayList<>();
		Calendar currenttime = Calendar.getInstance();
		Discounts discount = new Discounts();
		discount.setDiscount(5);
		discount.setEnable(true);
		discount.setEndDate(new Date((currenttime.getTime()).getTime()));
		discount.setMaxAmount(1000);
		discount.setMinAmount(500);
		discount.setMobile("8978446892");
		discount.setStartDate(new Date((currenttime.getTime()).getTime()));
		discounts.add(discount);
		return discounts;
	}
	
	private List<Invoice> getInvoiceMetadata() {
		List<Invoice> invoiceDetails = new ArrayList<>();
		Invoice invoice = new Invoice();
		invoice.setAddress("Hyd");
		invoice.setTotal(1000);
		invoice.setInvId(1);
		invoice.setUserMobile("8978446892");
		invoice.setUserName("DSP");
		invoiceDetails.add(invoice);
		return invoiceDetails;
	}
}
