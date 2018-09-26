package com.smydata.businessplan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.smydata.businessplan.repository.RewardsRepository;
import com.smydata.registration.model.Rewards;

@Service
public class RewardsServiceImpl implements RewardsService {

	@Autowired
	RewardsRepository rewardsRepository;
	
	@Autowired
	JdbcTemplate JdbcTemplate;
	
	@Override
	public Rewards saveReward(Rewards rewards) {
		if(rewards != null) {
			return rewardsRepository.save(rewards);
		} else {
			return null;
		}
	}

	@Override
	public List<Rewards> getRewards(String mobile, long businessId) {
		// return rewardsRepository.findByMobile(mobile);
		return JdbcTemplate.query(
				"SELECT MOBILE ,BONUS_END_DATE ,BONUS_POINT_ENALE ,BONUS_POINTS ,BONUS_START_DATE ,CASH_VALUE ,EFFECTIVE_AMOUNT ,ENABLE ,REWARD_END_DATE ,REWARD_POINT_ENABLE ,REWARD_START_DATE ,REWARD_END_DATE FROM REWARDS WHERE MOBILE = ? AND BUSINESS_DETAIL_ID = ?",
				new Object[] { mobile, businessId }, new BeanPropertyRowMapper<Rewards>(Rewards.class));
	}

}
