package com.smydata.businessplan.service;

import java.util.List;

import com.smydata.registration.model.Rewards;

public interface RewardsService {
	Rewards saveReward(Rewards rewards);
	List<Rewards> getRewards(long businessId);
}
